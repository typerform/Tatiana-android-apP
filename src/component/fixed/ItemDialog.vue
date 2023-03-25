
<template>
    <v-dialog
    persistent
    max-width="800px"
    :value="value"
    >
        <v-card>
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
                <v-card-title>Add Your Plan</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col>
                                <v-checkbox
                                :label="checkBoxText"
                                @change="todayChecked"
                                v-model="checkbox"
                                >
                                </v-checkbox>
                            </v-col>
                        </v-row>
                        <v-row>
                            <!-- START DATE -->
                            <v-col
                            cols="6"
                            >
                                <v-menu
                                v-model="startMenu"
                                max-width="400px"
                                ref="startMenu"
                                :close-on-content-click="false"
                                :close-on-click="false"
                                :return-value.sync="startDate"
                                transition="slide-x-transition"
                                offset-y
                                >
                                    <template v-slot:activator="{on}">
                                        <v-text-field
                                        readonly
                                        outlined
                                        label="Start Date"
                                        color="pink dark-1"
                                        v-model="startDate"
                                        v-on="on"
                                        :rules="startDateRules"
                                        required
                                        >
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                    width="100%"
                                    no-title
                                    scrollable
                                    v-model="startDate"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                        text
                                        color="error"
                                        @click="startMenu = false"
                                        >
                                        Cancel
                                        </v-btn>
                                        <v-btn
                                        text
                                        color="white"
                                        @click="$refs.startMenu.save(startDate)"
                                        >
                                        OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-menu>
                            </v-col>

                            <!-- END DATE -->
                            <v-col
                            cols="6"
                            >
                                <v-menu
                                v-model="endMenu"
                                max-width="400px"
                                ref="endMenu"
                                :close-on-content-click="false"
                                :return-value.sync="endDate"
                                transition="slide-x-reverse-transition"
                                offset-y
                                >
                                    <template v-slot:activator="{on}">
                                        <v-text-field
                                        readonly
                                        outlined
                                        label="End Date"
                                        color="pink dark-1"
                                        v-model="endDate"
                                        v-on="on"
                                        :rules="endDateRules"
                                        required
                                        >
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                    width="100%"
                                    no-title
                                    scrollable
                                    v-model="endDate"
                                    :allowed-dates="allowedDates"
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                        text
                                        color="error"
                                        @click="endMenu = false"
                                        >
                                        Cancel
                                        </v-btn>
                                        <v-btn
                                        text
                                        color="white"
                                        @click="$refs.endMenu.save(endDate)"
                                        >
                                        OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                        </v-row>

                        <!-- CONTENT -->
                        <v-row>
                            <v-col>
                                <v-text-field
                                outlined
                                label="Content"
                                color="pink dark-1"
                                :rules="contentRules"
                                required
                                v-model="content"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    outlined
                    color="error"
                    @click="closeBtnClicked"
                    >
                    CANCEL
                    </v-btn>
                    <v-btn
                    outlined
                    @click="addBtnClicked"
                    >
                    ADD
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script>
import eventBus from '../../utils/eventBus.js';
import { addItem } from '../../utils/dataStore.js';

export default {
    props: ['value'],
    data() {
        return {
            // FORM
            valid: true,
            // FORM VALIDATION
            contentRules: [
                v => !!v || 'Content is required'
            ],
            startDateRules: [
                v => !!v || 'StartDate is required',
            ],
            endDateRules: [
                v => !!v || 'EndDate is required',
                v => this.startDate <= v || 'EndDate should be higher than StartDate'
            ],
            // MENU
            checkBoxText: 'Today',
            checkbox: false,
            startMenu: false,
            startDate: '',
            endMenu: false,
            endDate: '',
            content: ''
        }
    },
    watch: {
        startDate: function(v){
            let d = new Date().toISOString().substr(0, 10);
            if( v == d && this.endDate == d){
                this.checkbox = true;
            }else{
                this.checkbox = false
            }
        },
        endDate: function(v){
            let d = new Date().toISOString().substr(0, 10);
            if( v == d && this.startDate == d){
                this.checkbox = true;
            }else{
                this.checkbox = false;
            }
        }
    },
    methods: {
        addBtnClicked: function() {
            if(this.$refs.form.validate()){
                addItem({
                    startDate: this.startDate,
                    endDate: this.endDate,
                    content: this.content
                });
                this.$emit("overlayClosed");
                eventBus.$emit("setSnackBar", { text: 'Add Item Successfully!'});
            }else {
                eventBus.$emit("setSnackBar", { text: 'Failed to add Item' });
            }
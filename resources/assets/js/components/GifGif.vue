<template>
    <div>
        <div class="rounded shadow text-grey-darker">
            <div class="py-8">
                <h3 class="text-center">How do you pronounce the word <span class="font-light uppercase">gif</span>?</h3>

                <div class="flex justify-center py-8">
                    <label for="gif1" class="mx-8">
                        GIF
                        <input type="radio" id="gif1" value="gif1" name="pronunciation" v-model="newVote.picked" />
                    </label>

                    <label for="gif2" class="mx-8">
                        GIF
                        <input type="radio" id="gif2" value="gif2" name="pronunciation" v-model="newVote.picked" />
                    </label>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="w-3/4">
                    <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker leading-tight"
                           id="reason"
                           type="text"
                           v-model="newVote.reason"
                           placeholder="Why do you think it should be pronounced that way?" />
                </div>
            </div>

            <div class="flex justify-center my-4">
                <div class="w-3/4">
                    <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker leading-tight"
                           id="name"
                           type="text"
                           v-model="newVote.name"
                           placeholder="What is your name?" />
                </div>
            </div>

            <div class="flex justify-center">
                <button id="submit"
                        v-bind:class="valid ? '' : 'opacity-50 cursor-not-allowed'"
                        :disabled="! valid"
                        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded my-8"
                        @click="add">
                    Submit
                </button>
            </div>
        </div>

        <div class="py-8">
            <h4 class="text-grey-darker text-center">User Responses:</h4>
            <ul v-for="vote in votes">
                <li class="py-4">
                    <p><span class="font-light uppercase">gif</span> —
                        {{ vote.reason }}</p>
                    <p class="text-sm mt-2">Submitted by <span class="uppercase">{{ vote.name }}</span> on 2018-07-25</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                newVote: {
                    picked: '',
                    reason: '',
                    name: ''
                },
                votes: []
            }
        },

        computed: {
            valid() {
                return this.newVote.picked && this.newVote.reason && this.newVote.name;
            }
        },

        methods: {
            add() {
                this.votes.push(this.newVote);

                this.newVote = {
                    picked: '',
                    reason: '',
                    name: ''
                };
            }
        }
    }
</script>

<template>
    <div>
        <div class="rounded shadow text-grey-darker">
            <div class="py-8">
                <h3 class="text-center">How do you pronounce the word <span class="font-light uppercase">gif</span>?</h3>

                <div class="flex justify-center py-8">
                    <label for="gif1" class="mx-8">
                        GIF
                        <input type="radio" id="gif1" value="gif1" name="pronunciation" />
                    </label>

                    <label for="gif2" class="mx-8">
                        GIF
                        <input type="radio" id="gif2" value="gif2" name="pronunciation" />
                    </label>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="w-3/4">
                    <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker leading-tight"
                           id="reason"
                           type="text"
                           placeholder="Why do you think it should be pronounced that way?" />
                </div>
            </div>

            <div class="flex justify-center my-4">
                <div class="w-3/4">
                    <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker leading-tight"
                           id="name"
                           type="text"
                           placeholder="What is your name?" />
                </div>
            </div>

            <div class="flex justify-center">
                <button id="submit"
                        class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded my-8">
                    Submit
                </button>
            </div>
        </div>

        <div class="py-8">
            <h4 class="text-grey-darker text-center">User Responses:</h4>
            <ul>
                <li class="py-4">
                    <p><span class="font-light uppercase">gif</span> —
                        It's the way the creator of the format wanted!</p>
                    <p class="text-sm mt-2">Submitted by <span class="uppercase">Samantha</span> on 2018-07-25</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {}
</script>

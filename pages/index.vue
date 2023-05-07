<template lang="pug">

//- Split window left to right
q-splitter(
    v-model="splitterModel"
    :limits="[0, 100]"
    style="height: 100vh"
)
    //- Right side
    template(v-slot:before)
        div.q-pa-md
            div.text-h4.q-mb-md Before
            div.q-my-md(
                v-for="n in 5" 
                :key="n"
            ) {{ n }}. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
    
    //- Left side
    template(v-slot:after)

        //- Split left side into top and bottom portion
        q-splitter(
            v-model="insideModel"
            :limits="[0, 100]"
            horizontal
        )

            //- Top portion
            template(v-slot:before)
                div.q-pa-md
                    div.text-h4.q-mb-md Before
                    div.q-my-md(
                        v-for="n in 5" 
                        :key="n"
                    ) {{ n }}. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.

            //- Bottom portion
            template(v-slot:after)
                div.q-pa-md
                    div.text-h4.q-mb-md After
                    div.q-my-md(
                        v-for="n in 20" 
                        :key="n"
                    ) {{ n }}. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
setup() {
    return {
        splitterModel: ref(15), // start left to right split at 15%
        insideModel: ref(30)    // start top to bottom split at 30%
    }
}
}
</script>
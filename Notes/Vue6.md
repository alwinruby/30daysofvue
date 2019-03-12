# Form Handling with V-Model


The v-model directive creates two-way data binding between form inputs and text area elements. In other words, v-model directly binds user input with a Vue object’s data model that as one changes, the other automatically gets updated.

The v-model directive syntax takes an expression which is the name of the
data property that the input is bound to:

        v-model = "dataProperty"


v-model removes any difficulty in keeping user input and the data model in sync and can be applied to virtually any form input element:

        V-MODEL
        Dropdowns
        Checkboxes
        Radio Inputs
        etc…

It’s important to keep in mind that when using the v-model directive - v-model takes the data property of the Vue instance as the single source of truth as opposed to HTML element attributes like checked or selected.

Though the v-model directive creates two-way data binding.

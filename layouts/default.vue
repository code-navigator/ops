<template lang="pug">

//- Default layout
q-layout.shadow-2.rounded-borders(
    view="lHh lpr lFf" 
    container 
    style="height: 100vh;" 
)   
    //- Header
    q-header
        q-toolbar
            q-toolbar-title Cygnus OPS

    //- Insert page here
    q-page-container
        q-page.q-pa-sm
            slot

</template>
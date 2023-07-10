<template>
    <main>
        <div>
            <!-- -------------------------------------- TITLE --------------------------------------------->
            <h1>COMPOSITION !!!</h1> 
        </div>
        <div>
            <p>Position Mouse => X: {{ x }} Y: {{ y }}</p>
        </div>
    </main>
</template>

<script setup lang="ts">
import useMouseMove from '@/composable/useMouseMove' 

const {x, y} = useMouseMove();

</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
}
main {
    background-color: rgb(112, 201, 117);
    text-align: center;
}
</style>

<template>
    <v-menu open-on-hover>
        <template v-slot:activator="{props}">
            <v-btn text class="text-black" v-bind="props">
                {{ title }}
            <v-icon v-if="icon" end>{{ icon }}</v-icon> <!-- icon tùy chọn -->
            </v-btn>
        </template>

        <slot><!-- Slot sẽ nhận nội dung từ cha truyền xuống --></slot> 
    </v-menu>
</template>
<script setup lang="ts">
defineProps<{ title: string, icon?: string }>()
</script>
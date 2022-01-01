<template>
    <q-layout view="hHh LpR lff">
    <!-- <q-header elevated class="glossy"> -->
    <q-header class="bg-black" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Header
        </q-toolbar-title>
        <q-btn round flat no-wrap>
            <q-avatar sise="26px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-menu auto-close>
                <q-list dense>
                    <q-item clickable>
                        <q-item-section>Cerrar Sesion</q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay 
      elevated
    >
        <!-- <q-scroll-area class="fit"> -->
            <q-list>
                <EssentialLink 
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        <!-- </q-scroll-area> -->
    </q-drawer>

    <q-footer class="bg-black">
        <q-toolbar>
            <span class="text-body1 text-grey-3 text-weight-bold">
                © Copy
            </span>
            <q-space></q-space>
            <span class="text-body1 text-grey-3 text-weight-bold">
                By Example
            </span>
        </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from '@/components/EssentialLink.vue'

const linksList = [
    {
        title: 'Seccion1',
        caption: 'seccion1',
        icon: 'dashboard',
        link: '#',
    },
    {
        title: 'Seccion2',
        caption: 'seccion2',
        icon: 'dashboard',
        link: '#',
    },
    {
        title: 'Seccion3',
        caption: 'seccion3',
        icon: 'dashboard',
        link: '#',
    },
    {
        title: 'Seccion4',
        caption: 'seccion4',
        icon: 'dashboard',
        link: '#',
    }
]

import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'MainLayout',
    components: {
        EssentialLink,
    },

    setup() {
        const leftDrawerOpen = ref(false);

        return {
            essentialLinks: linksList,
            leftDrawerOpen,
            toggleLeftDrawer () {
                leftDrawerOpen.value = !leftDrawerOpen.value
            }
        }
    }
})

</script>
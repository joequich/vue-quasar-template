<template>
    <q-layout view="hHh LpR lff">
    <!-- <q-header elevated class="glossy"> -->
    <q-header>
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
        <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png">
            <q-menu anchor="bottom left" self="top left">
                <q-item clickable>
                    <q-item-section>Cerrar Sesion</q-item-section>
                </q-item>
            </q-menu>
        </q-avatar>
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

    <q-footer elevated class="bg-black">
        <q-toolbar>
            <div>© Copy</div>
            <q-space></q-space>
            <div>By Example</div>
        </q-toolbar>
    </q-footer>

    <q-page-container>
      <HelloWorld />
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
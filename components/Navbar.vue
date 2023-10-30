<script setup>
    let Menu = ref(false);
    const toggleMenu = () => {
        Menu.value = !Menu.value;
    }

    let searchBar = ref(false);
    const toggleSearchBar = () => {
        searchBar.value = !searchBar.value;
    }


</script>

<template>
    <transition name="switch">
    <nav class="flex justify-between items-center space-x-3 px-5 bg-black h-12 text-white">
        <NuxtLink class="text-3xl font-bold" to="/" style="color:white;">Movify</NuxtLink>

        <div class="md:w-96 lg:flex lg:justify-center md:justify-center space-x-5 sm:hidden md:hidden">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/series">Series</NuxtLink>
            <NuxtLink to="/pages">Pages</NuxtLink>
            <NuxtLink to="/pricing">Pricing</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </div>

        <div class="sm:w-[70%] md:w-[80%] lg:w-[30%] flex items-center md:justify-end space-x-4 sm:flex sm:justify-end">

            <div class="flex space-x-1 items-center relative">
                <transition name="search">
                    <input v-show="searchBar" type="text" class="rounded-lg py-1 px-3 bg-gray-600 outline-none transition delay-100">
                </transition>
                <Icon @click="toggleSearchBar" class="border rounded-full p-1 absolute right-1 hover:bg-gray-600 cursor-pointer" name="ph:magnifying-glass" color="white" size="25px"/>
            </div>

            <div>
                <Icon class="border rounded-full p-1 hover:bg-gray-600 cursor-pointer" name="ph:bell" color="white" size="25px"/>
            </div>

            <div>
                <Icon class="border rounded-full p-1 hover:bg-gray-600 cursor-pointer" name="ph:user-duotone" color="white" size="25px"/>
            </div>
            

            <button class="bg-red-500 text-sm rounded-lg hover:bg-red-600 sm:px-2 sm:py-2">Subscribe Now</button>
        </div>

        <!-- on small screens -->
        <div class="lg:hidden md:flex">
            <div class="cursor-pointer">
                <Icon @click="toggleMenu" name="ph:list-duotone" color="white" size="25px"/>
            </div>

            <Transition name="fade" v-show="Menu">
                <div class="space-y-3 lg:hidden md:flex-col md:justify-center md:items-center md:flex sm:flex-col sm:justify-center sm:items-center sm:flex z-10 absolute right-0 top-12 bg-gray-900 h-48 w-44 rounded-bl-md transition delay-100">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/series">Series</NuxtLink>
                    <NuxtLink to="/pages">Pages</NuxtLink>
                    <NuxtLink to="/pricing">Pricing</NuxtLink>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </div>
            </Transition>
        </div>
    </nav>
</transition>
</template>

<style scoped>
    .fade-enter-from {
        transition: all 0.4s;
        transform: translateX(160px);
    }
    
    .fade-leave-to{
        transition: all 0.4s;
        transform: translateX(290px);
    }
    /* ------------------------------------ */

    .search-enter-from {
        transition: 0.4s;
        transform: scaleX(0.3);
        /* filter: blur(1rem); */
    }
    
    .search-leave-to{
        transition: all 0.4s;
        transform: scaleX(0.5);
        opacity: 0;
        filter: blur(1rem);
    }

    .router-link-exact-active{
    color: Red;
    }

</style>
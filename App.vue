<template>
  <div>
    <label>{{ label }}</label>
    <input :type="type" v-model="inputValue">
  </div>
</template>

<script>
export default {
  props: ['type', 'label'],
  data() {
    return {
      inputValue: ''
    };
  }
};
</script>

<style scoped>
/* Estilos específicos del componente */
</style>

<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  props: ['label'],
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
/* Estilos específicos del componente */
</style>
<template>
  <div>
    <h2>OtroGeneric</h2>
    <pre>{{ objeto }}</pre>
  </div>
</template>

<script>
export default {
  props: ['objeto']
};
</script>

<style scoped>
/* Estilos específicos del componente */
</style>


<template>
  <div>
    <!-- Campos de entrada -->
    <InputGeneric type="text" label="Nombre" />
    <InputGeneric type="date" label="Fecha de Nacimiento" />
    <InputGeneric type="tel" label="Celular" />
    <InputGeneric type="email" label="Correo" />

    <!-- Botones -->
    <ButtonGeneric label="Agregar" @click="agregar" />
    <ButtonGeneric label="Modificar" @click="modificar" />
    <ButtonGeneric label="Eliminar" @click="eliminar" />
    <ButtonGeneric label="Consultar" @click="consultar" />

    <!-- Componente genérico para otro objeto -->
    <OtroGeneric :objeto="otroObjeto" />
  </div>
</template>

<script>
import InputGeneric from '@/components/InputGeneric.vue';
import ButtonGeneric from '@/components/ButtonGeneric.vue';
import OtroGeneric from '@/components/OtroGeneric.vue';

export default {
  components: {
    InputGeneric,
    ButtonGeneric,
    OtroGeneric
  },
  data() {
    return {
      otroObjeto: {} // Objeto que se mostrará en el componente OtroGeneric
    };
  },
  methods: {
    // Métodos para manejar la lógica de los botones
    agregar() { /* Lógica para agregar */ },
    modificar() { /* Lógica para modificar */ },
    eliminar() { /* Lógica para eliminar */ },
    consultar() { /* Lógica para consultar */ }
  }
};
</script>

<style scoped>
/* Estilos específicos de la vista */
</style>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input :type="type" v-model="inputValue">
  </div>
</template>

<script>
export default {
  props: ['type', 'label'],
  data() {
    return {
      inputValue: ''
    };
  }
};
</script>

<style scoped>
/* Estilos específicos del componente */
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

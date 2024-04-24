const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    port: 8080, // Puerto para el servidor local
    host: 'mi-proyecto.local', // Nombre del servidor local
    public: 'mi-proyecto.local', // Dirección del servidor local
  }
}

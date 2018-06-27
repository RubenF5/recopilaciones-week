new Vue ({
  el: '#app',
  data: {
    libros: [
      {imagen:'https://www.recreoviral.com/wp-content/uploads/2015/06/30-asombrosas-portadas-de-libros-24.jpg',titulo:'The Investigation' },
      {imagen:'https://a.wattpad.com/cover/104041861-352-k312690.jpg',titulo:'Portadas Para Libros'},
      {imagen:'https://i.pinimg.com/originals/8d/9b/a5/8d9ba5df9a59ec6f73f0a40630247440.jpg',titulo:'Horror Stories' },
      {imagen:'https://i.pinimg.com/originals/ca/6e/70/ca6e708aaf2370b6d80bfd121f97f464.jpg',titulo:'El legado' },
      {imagen:'https://i.pinimg.com/originals/bc/30/c5/bc30c58707b8c2d343e18698cbe1a797.jpg',titulo:'No Subas' },
      {imagen:'http://static.notinerd.com/wp-content/uploads/2015/03/188.jpg',titulo:'My Lucky Little Friday' },
      {imagen:'http://www.imprimirmilibro.es/blog/wp-content/uploads/2013/06/portada-libro_1_thumb.jpg',titulo:'Mortal Relativism'},
      {imagen:'https://m1.paperblog.com/i/469/4695813/top-ten-portadas-mas-bonitas-libros-leidos-L-PjOPFm.jpeg',titulo:'Animales Fantasticos'},
      {imagen:'https://juanjelopezponeletras.files.wordpress.com/2017/04/brothers_and_beasts_book_cover_isaac_tobin_3.jpg?w=201&h=306',titulo:'Brothers & beast'},
      {imagen:'http://pm1.narvii.com/6251/f6fe74fe16b121b26acf2ea7a0d5ef5ca6619041_00.jpg',titulo:'Never Never part3'},
      {imagen:'https://i1.wp.com/www.sopitas.com/site/wp-content/uploads/2015/04/cat_hat_libro_1.jpg?resize=640%2C923',titulo:'The cat in the hat'},
      {imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg5hD35tWePliOvGLjdhRiK0vTspX0e74YxNRa-g3ZGfzh6JeJXg',titulo:'The Trees'},
      {imagen:'http://www.docemoradas.com/imag/usuarios/1/imagen_portadas_21.jpg',titulo:'Los Dones'},
      {imagen:'https://i.emezeta.com/weblog/portadas-libros/aladdin-colouring-book.jpg',titulo:'Aladin'}

      
    ],
    items : 0
  },
  methods: {
      addCart: function() {
        this.items++;
        var itemsCart = document.getElementById('items-cart');
        itemsCart.innerText = this.items + ' ITEMS';
      },
      showInfo: function(event) {
              var imagen = event.target.src;
              var imgModal = document.querySelector('#img-modal');
              imgModal.src = imagen;
          },
      
  }

})


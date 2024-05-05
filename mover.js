AFRAME.registerComponent('mover', {
  init: function() {
    let el = this.el;
    this.animateMove = function() {
        let currPos = el.getAttribute('position')
        let params = {
          property: 'position',
          to: {
            x: currPos.x -5,
            y: currPos.y,
            z: currPos.z
          },
          dur: 5000,
          easing: 'easeInOutElastic'
        };
        el.setAttribute('animation', params);
      }
      this.el.addEventListener('click', this.animateMove);
  },
  remove: function() {
    this.el.removeEventListener('click', this.animateMove);
  }
})
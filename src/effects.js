/**
 * effects.js
 */
jax.extend({
    delayTime : 0,
    /**
     * Function to set the delay time for the next animation to fire
     *
     * @param   {Number} ms
     * @returns {jax}
     */
    delay : function(ms) {
        this.delayTime = ((ms != null) && (typeof ms == 'number') && (!isNaN(ms))) ? ms : 0;
        return this;
    },
    /**
     * Function to show all current elements
     *
     * @returns {jax}
     */
    show : function() {
        for (var i = 0; i < this.length; i++) {
            this[i].style.display = 'block';
        }
        return this;
    },
    /**
     * Function to hide all current elements
     *
     * @returns {jax}
     */
    hide : function() {
        for (var i = 0; i < this.length; i++) {
            this[i].style.display = 'none';
        }
        return this;
    },
    /**
     * Function to toggle display of selected elements
     *
     * @param   {String} disp
     * @returns {jax}
     */
    toggle : function(disp) {
        if (disp == null) {
            disp = 'block';
        }
        for (var i = 0; i < this.length; i++) {
            this[i].style.display = (this[i].style.display == 'none') ? disp : 'none';
        }
        return this;
    }
});
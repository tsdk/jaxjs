/**
 * append.js
 */
jax.extend({
    /**
     * Function to append an new element to the current element
     *
     * @param   {String}  type
     * @param   {Object}  attribs
     * @param   {String}  value
     * @param   {Boolean} pre
     * @returns {jax}
     */
    append : function(type, attribs, value, pre) {
        if (this[0] == undefined) {
            throw 'An object must be selected in which to append.';
        }

        // Create the child element.
        var objChild = document.createElement(type);

        // Set any element attributes.
        if ((attribs != undefined) && (attribs != null)) {
            for (var attrib in attribs) {
                // Account for IE7 style attribute property issue.
                if ((attrib == 'style') && (window.jax.browser.msie) && (window.jax.browser.version < 8)) {
                    var styles = (attribs[attrib].lastIndexOf(';') == (attribs[attrib].length - 1)) ? attribs[attrib].substring(0, (attribs[attrib].length - 1)) : attribs[attrib];
                    var sty = styles.replace('; ', ';').split(';');
                    for (var j = 0; j < sty.length; j++) {
                        var styleVal = sty[j].replace(': ', ':').split(':');
                        this.setCss(objChild, styleVal[0].trim(), styleVal[1].trim());
                    }
                } else {
                    objChild.setAttribute(attrib, attribs[attrib]);
                }
            }
        }

        // If the element type is a textarea
        if (type == 'textarea') {
            if (window.jax.browser.msie) {
                objChild.innerText = (value != null) ? value : '';
            } else {
                objChild.innerHTML = (value != null) ? new window.jax.String(value).html(true) : '';
            }
            // Else, set any value within the element.
        } else {
            if ((value != undefined) && (value != null)) {
                objChild.innerHTML = value;
            }
        }

        // Prepend or append the child element to the parent element.
        if ((pre != undefined) && (pre) && (this[0].childNodes[0] != undefined)) {
            this[0].insertBefore(objChild, this[0].childNodes[0]);
        } else {
            this[0].appendChild(objChild);
        }

        return this;
    },
    /**
     * Alias function to prepend a new element to the current element
     *
     * @param   {String} type
     * @param   {Object} attribs
     * @param   {String} value
     * @returns {jax}
     */
    prepend : function(type, attribs, value) {
        return this.append(type, attribs, value, true)
    }
});
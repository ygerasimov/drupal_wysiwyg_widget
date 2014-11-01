(function($) {
  Drupal.wysiwyg.plugins.simplebox = {
     attach : '',
  },

  simpleboxAddPlugin = {
    requires: 'widget',

    icons: 'simplebox',

    init: function( editor ) {
        editor.ui.addButton('simplebox', {
          label: 'Add simplebox',
          command: 'simplebox',
          icon: Drupal.settings.wysiwyg.plugins.drupal.simplebox.module + '/icons/simplebox.png'
        });
        editor.widgets.add( 'simplebox', {

            button: 'Create a simple box',

            template:
                '<div class="simplebox">' +
                    '<h2 class="simplebox-title">Title</h2>' +
                    '<div class="simplebox-content"><p>Content...</p></div>' +
                '</div>',

            editables: {
                title: {
                    selector: '.simplebox-title',
                    allowedContent: 'br strong em'
                },
                content: {
                    selector: '.simplebox-content',
                    allowedContent: 'p br ul ol li strong em'
                }
            },

            allowedContent:
                'div(!simplebox); div(!simplebox-content); h2(!simplebox-title)',

            requiredContent: 'div(simplebox)',

            upcast: function( element ) {
                return element.name == 'div' && element.hasClass( 'simplebox' );
            }
        } );
    }
  }
})(jQuery);
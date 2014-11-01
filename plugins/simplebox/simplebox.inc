<?php

/**
 * @file
 * WYSIWYG plugin.
 */

/**
 * Implements hook_INCLUDE_plugin().
 */
function pp_wysiwyg_widget_simplebox_plugin() {
  $path = drupal_get_path('module', 'pp_wysiwyg_widget') . '/plugins/simplebox';

  $plugins['simplebox'] = array(
    'title' => t('Create a simple box'),
    'icon path' => $path . '/icons',
    'icon file' => 'simplebox.png',
    'icon title' => t('Create a simple box'),
    'js path' => $path,
    'js file' => 'simplebox.js',
    'css path' => $path,
    'css file' => 'simplebox.css',
    'settings' => array(
      'module' => base_path() . $path,
      'wysiwygAddPlugin' => 'simpleboxAddPlugin'
    ),
  );
  return $plugins;
}

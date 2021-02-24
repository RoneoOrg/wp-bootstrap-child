<?php
/**
 * roneo.org Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package roneo.org
 */

add_action( 'wp_enqueue_scripts', 'wp_bootstrap_starter_parent_theme_enqueue_styles' );

/**
 * Enqueue scripts and styles.
 */
function wp_bootstrap_starter_parent_theme_enqueue_styles() {
	wp_enqueue_style( 'wp-bootstrap-starter-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'roneo.org-style',
		get_stylesheet_directory_uri() . '/style.css',
		array( 'wp-bootstrap-starter-style' )
	);

}
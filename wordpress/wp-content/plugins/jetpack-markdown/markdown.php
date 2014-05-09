<?php

/*
 * Plugin Name: Jetpack Markdown
 * Plugin URI: http://wordpress.org/plugins/jetpack-markdown/
 * Description: Write in Markdown, publish in HTML.
 * Author: Anas H. Sulaiman
 * Version: 2.9.3
 * Author URI: http://ahs.pw/
 * Text Domain: jetpack-markdown
 * Domain Path: /languages/
 * License: GPL2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

/**
 * Module Name: Markdown
 * Module Description: Write in Markdown, publish in HTML.
 * Sort Order: 12
 * First Introduced: 2.8
 * Requires Connection: No
 * Auto Activate: No
 * Module Tags: Writing
 */

include_once dirname( __FILE__ ) . '/require-lib.php'; 
include dirname( __FILE__ ) . '/markdown/easy-markdown.php';

// If the module is active, let's make this active for posting, period.
// Comments will still be optional.
add_filter( 'pre_option_' . WPCom_Markdown::POST_OPTION, '__return_true' );
function jetpack_markdown_posting_always_on() {
	// why oh why isn't there a remove_settings_field?
	global $wp_settings_fields;
	if ( isset( $wp_settings_fields['writing']['default'][ WPCom_Markdown::POST_OPTION ] ) ) {
		unset( $wp_settings_fields['writing']['default'][ WPCom_Markdown::POST_OPTION ] );
	}
}
add_action( 'admin_init', 'jetpack_markdown_posting_always_on', 11 );

// E-2 {
function jetpack_markdown_load_textdomain() {
	load_plugin_textdomain( 'jetpack-markdown', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}
add_action( 'plugins_loaded', 'jetpack_markdown_load_textdomain' );
// }

// E-3 {
function jetpack_markdown_settings_link($actions) {
	return array_merge(
		array( 'settings' => sprintf( '<a href="%s">%s</a>', 'options-discussion.php#' . WPCom_Markdown::COMMENT_OPTION, __( 'Settings', 'jetpack-markdown' ) ) ),
		$actions
	);
	return $actions;
}
add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'jetpack_markdown_settings_link' );
// }

/*
Edits by Anas H. Sulaiman:
E-1 : include require-lib.php file
E-2 : load text domain
E-3 : add settings link
*/
<?php
/**
 * Plugin Name: Gutenstrap — Gutenberg Blocks for Bootstrap 4
 * Plugin URI: https://github.com/adamwills/gutenstrap
 * Description: Gutenstrap creates Gutenberg blocks based on Bootstrap 4 components
 * Author: AdamWills
 * Author URI: https://adamwills.io
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

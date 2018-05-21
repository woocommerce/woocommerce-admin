// ==UserScript==
// @name         Woo Dash Live Branches
// @namespace    https://wordpress.com/
// @version      0.1
// @description  Adds links to PRs pointing to dospandas.club
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @match        https://github.com/woocommerce/woo-dash/pull/*
// ==/UserScript==

( function() {
	const $ = jQuery.noConflict();
	doit();

	function doit() {
		const markdownBody = document.querySelectorAll( '.markdown-body' )[ 0 ];
		const branch = jQuery( '.head-ref' ).text();
		const branchIsForked = branch.includes( ':' );
		const branchIsMerged = $( '.gh-header-meta .State' ).text().trim() === 'Merged';
		const query = 'woo-dash=' + branch + '&shortlived&wp-debug-log';
		const base = 'https://dospandas.club/create?';
		let link = base + query;
		const canLiveTestText =
			'<div id="dospandas-live-test">' +
			'<h2>Test This Branch</h2>' +
			'<p style="height:3em;" ><a id="dospandas-branch-link" target="_blank" rel="nofollow noopener" href="' + link + '">' + link + '</a></p>' +
			'</div>';
		const branchIsForkedText =
			'<div id="dospandas-live-test">' +
			'<h2>Test This Branch</h2>' +
			'<p><strong>This branch can\'t be tested live because it comes from a forked version of this repo.</p>' +
			'</div>';
		const branchIsMergedText =
            '<div id="dospandas-live-test">' +
			'<h2>Test This Branch</h2>' +
            '<p><strong>This branch is already merged.</p>' +
			'</div>';
		if ( ! branchIsForked && ! branchIsMerged ) {
			appendHtml( markdownBody, canLiveTestText );
		} else if ( ! branchIsMerged ) {
			appendHtml( markdownBody, branchIsForkedText );
		} else {
			appendHtml( markdownBody, branchIsMergedText );
		}

		function appendHtml( el, str ) {
			const div = document.createElement( 'div' );
			const $el = $( el );
			$( div ).append( str );
			$el.append( $( div ).children().get( 0 ) );
		}
	}
} )();
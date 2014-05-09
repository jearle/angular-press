=== Jetpack Markdown ===
Contributors: ahspw
Tags: jetpack, markdown, posts, post, comments
Requires at least: 3.5
Tested up to: 3.9
Stable tag: 2.9.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Write in Markdown, publish in HTML.

== Description ==

Markdown lets you compose posts and comments with links, lists, and other styles using regular characters and punctuation marks. Markdown is used by writers and bloggers who want a quick and easy way to write rich text, without having to take their hands off the keyboard, and without learning a lot of complicated codes and shortcuts.

If you are already familiar with Markdown, just enable it on your blog and start writing; refer to the WordPress.com Markdown [Quick Reference page](http://en.support.wordpress.com/markdown-quick-reference/) for help. Jetpack Markdown uses Markdown Extra, which adds some features not originally available in Markdown. For best results, please use the Text tab in the Editor as the Visual editor can give unexpected results. See below for more details.

= Enabling Markdown =

From the Plugins page, Activate the Jetpack Markdown. Once it is activated, Markdown is enabled for posts and pages and available to all users on your blog.

To enable Markdown for comments, go to **Settings → Discussion** in your dashboard, and check the box labeled Use Markdown for comments. Click on **Save Changes** at the bottom of the page to apply. Visitors to your blog will now be able to compose comments using Markdown.

When writing with Markdown, make sure you always use the Text editor and not the Visual editor. Using the Visual editor may cause unexpected results with Markdown.

= Writing with Markdown =

Markdown makes use of special characters and punctuation marks to indicate styles and links. The specific characters you use and how you place them in the document is key to how your document will be formatted. When the document is published, Markdown converts these special characters to the appropriate formatting. For best results, use the Text tab in the Editor. The Visual Editor can produce unexpected results.

For example, in Markdown, to emphasize a word, you wrap it with an asterisk on both ends, like this: \*emphasized*. When your writing is published, it will instead look like this: *emphasized*. Similarly, two asterisks denote strong text: \**strong** will be published as **strong**.

To indicate links, use regular and square parentheses. Wrap the text you want to link in square parentheses, and immediately after it, insert the link target, wrapped in regular parentheses. The actual Markdown could look like this: \[Jetpack Markdown](http://wordpress.org/plugins/jetpack-markdown/). When published, it will be a standard link: [Jetpack Markdown](http://wordpress.org/plugins/jetpack-markdown/).


The original Markdown text you write will always remain in Markdown, this way you can go back and edit it using Markdown. Only the published document – the post or the page – will be converted. If you write a post in Markdown, it will be published as a fully formatted post on your blog, but when you go back and edit, it’ll still be in Markdown.

The best way to get started with Markdown is to experiment. Open the [Markdown Quick Reference guide](http://en.support.wordpress.com/markdown-quick-reference/), start a draft post on your blog, and try to use the different features.

= Markdown Extra and Markdown in Jetpack Markdown =

Jetpack Markdown uses [Markdown Extra](http://michelf.ca/projects/php-markdown/extra/) by Michel Fortin. It includes some features not originally available in Markdown, including improved support for inline HTML, code blocks, tables, and more. Code blocks can use three or more back ticks (```), as well as tildes (~~~).

See the [WordPress.com Markdown Quick Reference](http://en.support.wordpress.com/markdown-quick-reference/) page for the most useful formatting and features offered by Markdown Extra. For more detailed information, see the [original reference guide for Markdown](http://daringfireball.net/projects/markdown/), and the [Markdown Extra](http://michelf.ca/projects/php-markdown/extra/) page.

= About Markdown =

Markdown was created by John Gruber and Aaron Swartz in 2004 as a solution for easily composing richly formatted text on the web. It employs plain text only and is based on conventions established in the computer and technology industry for writing emails and other documents with limited resources.

In plain text documents, the text you see on the screen represents all the information in the file, with essentially no formatting or other data hidden from view. Plain text documents have been used for decades for their simplicity, portability, and reliability. You can probably still open and edit any plain text document from the past 40 years in any computing device available today.

Markdown has seen popular adoption on the web since it was first introduced, and it is now included in many sites and software programs.

* [Markdown Project](http://daringfireball.net/projects/markdown/).
* [Markdown](http://en.wikipedia.org/wiki/Markdown) on Wikipedia.
* [Mou](http://mouapp.com/) is a free Markdown editor for Mac.
* [MarkPad](http://code52.org/DownmarkerWPF/) is an open source Markdown editor for Windows.
* [Texts](http://www.texts.io/) is a Markdown editor for Mac and Windows which can convert Markdown to many formats, including PDF and Word documents.
* [Byword](http://bywordapp.com/) is a Markdown editor for Mac, iPhone and iPad.
* [Draft](https://play.google.com/store/apps/details?id=com.mvilla.draft) is a Markdown editor for Android devices.
* [Simplenote](http://simplenote.com/) is a cross-platform note-taking service by Automattic, with Markdown support.

= Notes =

[Jetpack](http://wordpress.org/plugins/jetpack/) is a plugin that ships with many modules. Why install the whole package, if you're just interested in one module?!

This plugin is the exact [Markdown module](http://jetpack.me/support/markdown/) of the original Jetpack plugin, only without all the extra stuff.

The version number of this plugin will follow the version number of Jetpack. This way, it's easier for you to know which Jetpack version this module was extracted from.

Things you'd be happy to know:

* The module is almost untouched. (Some lines had to be removed and some had to be added, for the sole reason of making the module a stand-alone plugin).
* The module was carefully extracted from the package. That means there is no missing feature or some irrelevant code.
* The module does not require a connection to a WordPress.com account.

Note: Translations were not included, due to the fact that Jetpack uses one transaltion file for all the modules, which makes it really difficult to extract translations.
The good news is that the module can be translated easily.

= You may also like =

* [Jetpack Sharing](http://wordpress.org/plugins/jetpack-sharing/) - Share content with Facebook, Twitter, and many more.
* [Jetpack Widget Visibility](http://wordpress.org/plugins/jetpack-widget-visibility/) - Control what pages your widgets appear on.
* [Jetpack Gravatar Hovercards](http://wordpress.org/plugins/jetpack-gravatar-hovercards/) - Show a pop-up business card of your users' gravatar profiles in comments.
* [Jetpack Omnisearch](http://wordpress.org/plugins/jetpack-omnisearch/) - A single search box, that lets you search many different things.

== Installation ==

1. Install Jetpack Markdown either via the WordPress.org plugin directory, or by uploading the files to your server.
2. Activate Jetpack Markdown through the 'Plugins' menu in WordPress.
3. That's it. You're ready to go!

== Screenshots ==

1. Enabling Jetpack Markdown for comments
2. On the left: using Markdown to compose a post in the fullscreen editor; On the right: The published post

== Changelog ==

= 2.9.3 =

* Update to 2.9.3

= 2.9 =

* Initial release

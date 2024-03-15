# insta100xRedirect

A Chrome extension that redirects `instagram.com` to `app.100xdevs.com/courses/`

## Installation

Follow these steps to install the extension on your Chrome browser:

1. Download or clone this repository to your local machine.

2. Open Google Chrome and navigate to `chrome://extensions`.

3. Enable "Developer mode" in the top right corner of the Extensions page.

4. Click on the "Load unpacked" button that appears after enabling Developer mode.

5. Browse to the directory where you downloaded or cloned this repository and select the root folder.

6. The "insta100xRedirect" extension should now be loaded and active in your Chrome browser.

## Usage

Once the extension is installed, whenever you try to visit `instagram.com`, you will be automatically redirected to `https://app.100xdevs.com/courses/`.

This extension helps you stay focused on learning and coding by redirecting you from Instagram to the 100xDevs courses page.

## Customization

If you want to customize the redirect URL, you can modify the `background.js` file:

1. Open the `background.js` file in a text editor.

2. Locate the following line:

   ```javascript
   return {redirectUrl: "https://app.100xdevs.com/courses/"};
   ```

3. Change the `redirectUrl` property to the desired URL where you want to be redirected.

4. Save the changes and reload the extension in Chrome by going to `chrome://extensions`, locating the "insta100xRedirect" extension, and clicking on the "Reload" button.

## Troubleshooting

If the extension doesn't seem to be working, try the following:

- Make sure the extension is enabled in Chrome by checking the toggle switch next to the extension on the `chrome://extensions` page.
- Reload the extension after making any changes to the code.
- Clear your browser cache and restart Chrome.

If you still encounter issues, please open an issue on the GitHub repository.

## Contributing

If you'd like to contribute to this project, feel free to submit a pull request or open an issue with your suggestions or bug reports.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy staying focused and happy coding with insta100xRedirect! 🚀💻

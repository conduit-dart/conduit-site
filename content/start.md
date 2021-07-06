---
title: "Get Started with Conduit"
subhead: "It only takes a few minutes."
template: post.html
jinja: true
---

<div class="text-center">

___(Migrating from Aqueduct? [Click here]({{data.links.migrate}}))___

</div>

<div class="block-list">

1. Install the Dart programming environment locally. 
   If you’ve previously installed it through Flutter, 
   you’ll want to install it again separately for Conduit.
   [Full instructions on the Dart site](https://dart.dev/get-dart)
   
   {{< codetabs />}}

   {% code bash(platform=linux) %}
   sudo sh -c 'wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -'
   sudo sh -c 'wget -qO- https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list'
   sudo apt-get update
   sudo apt-get install dart
   echo 'export PATH="$PATH:/usr/lib/dart/bin"' >> ~/.profile
   # Test that it works - display version string
   dart --version
   {% endcode %}
   
   {% code bash(platform=macos) %}
   brew tap dart-lang/dart
   brew install dart
   # Test that it works - display version string
   dart --version
   {% endcode %}

   {% code bash(platform=windows) %}
   :: (in an administrator command line)
   choco install dart-sdk
   :: Test that it works - display version string
   dart --version
   {% endcode %}
   

2. Activate the Conduit CLI (command line interface),
   which helps you easily create, manage, and test
   your Conduit projects.

    ```bash
    pub global activate conduit
    conduit --version 
    # “Conduit CLI version: x.y.z”
    ```

3. Create and run your new Conduit project using the
   Conduit CLI.

   After running `conduit serve`, you should see
   a port listed, such as 8888 or 8080. In your web
   browser of choice, navigate to http://localhost:xxxx
   where xxxx is the port number. You should see ‘404
   Not Found’ displayed in bold text.

    ```bash
    conduit create my_project
    cd my_project
    conduit serve
    ```

4. Open the project folder in your favorite IDE with
   Dart support, such as [VS Code](https://code.visualstudio.com/) 
   with the [Dart Code](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code)
   extension or [JetBrains WebStorm](https://www.jetbrains.com/webstorm/). 
   [See a full list of IDEs with Dart support >](https://dart.dev/tools#general-purpose-tools)

    ```bash
    code .
    ```
   
</div>

Setup is now complete! If you need help, we recommend asking on our [Discord]({{data.links.discord}}). Otherwise, now’s a good time to check out the
[heroes tutorial]({{data.links.heroes}}) or the [docs]({{data.links.docs}}).
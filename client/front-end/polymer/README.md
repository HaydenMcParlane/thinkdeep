#
#   Thinkdeep.tech front-end web application
#   Author: Hayden McParlane <hayden.mcparlane@gmail.com>

Project TODO:
+ Look into conversion of ES6 to ES5. Polymer docs recommend
conversions for browsers that don't fully support ES6 (i.e, ie11).
+ Implement iron footer with nested child specifics (i.e, to allow
a company to put loads of links in the footer such as Contact Us,
Careers, etc).

    <iron-footer copyright="Hayden McParlane">
        <iron-footer-a href="Contact Us">Contact Us</iron-footer-a>
                           .
                           .
                           .
    </iron-footer>

+ Implement nesting within elements for further customization. I.e,
    <my-element>
        <my-element-child-typeA>
        <my-element-child-typeB>
        <my-element-child-typeA>
            .
            .
            .
            .
    </my-element>


+ Use top down approach to developing website along with TDD.
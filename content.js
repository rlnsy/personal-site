Vue.component('project-item', {
    props: ['project'],
    template: '<li>' +
        '<h4> {{ project.title }} </h4>' +
        '<p> {{ project.description }} </p>' +
        '</li>',
});

var app = new Vue({
    el: '#window',
    data: {
        current_section: "bio",
        sections: {
            "bio": {
                right: "project",
                title: "About me",
                text: "Lorem ipsum dolor sit amet, consectetur " +
                    "adipiscing elit. Aliquam pulvinar, massa n" +
                    "on porta pretium, metus risus lacinia ligu" +
                    "la, a accumsan felis est ut risus. Vivamus" +
                    " vitae ante at urna tincidunt. "
            },
            "project": {
                left: "bio",
                right: "links",
                title: "Projects",
                text: "Lorem ipsum dolor sit amet, consectetur " +
                    "adipiscing elit. Fusce ornare varius eleif" +
                    "end. Morbi iaculis ultrices ultrices. Null" +
                    "a ultricies tempor luctus. Donec in elit s" +
                    "celerisque, sagittis nisi in, lacinia mi. " +
                    "Sed pellentesque vulputate ante, vitae lao" +
                    "reet eros tempor at. Proin nec mollis sapi" +
                    "en. Proin bibendum massa et nunc molestie " +
                    "vulputate eu ac velit. Aliquam non semper " +
                    "sem. Morbi vel vulputate ante. Aliquam sit" +
                    " amet tortor porttitor, maximus enim vitae" +
                    ", tristique neque. Nunc non ullamcorper od" +
                    "io. Integer auctor sem ante, eget accumsan" +
                    " nunc ornare eget. Donec vel justo quam. M" +
                    "auris finibus vitae nunc sed lacinia. Nunc" +
                    " auctor sollicitudin molestie. Donec et ma" +
                    "lesuada. "
            },
            "links": {
                left: "project",
                title: "Links",
            }
        },
        projects: [
            {
                id: 0,
                title: "Using Machine-Learning/Data-Science to Analyze and Discover Subreddits",
                description: "Inspired by the problem of content/community bubbles in social " +
                    "media and news sources, I set out to built a new sort of discovery platf" +
                    "orm using findings and models from a scientifically-driven project. So f" +
                    "ar, I have learned a tremendous amount about using and implementing usef" +
                    "ul algorithms in Python and analyzing data, and have been able to simult" +
                    "aneously flex my web-development muscles by building an interactive depl" +
                    "oyment of said models – including an API for web or mobile use."
            },
            {
                id: 1,
                title: "Naughtify: Managing and Eliminating Mobile Distractions",
                description: "Naughtify is an app for enhancing individual productivity and a" +
                    "wareness by analyzing and managing mobile notifications. In this project" +
                    " I used the cross-platform framework Flutter in conjunction with native " +
                    "code for handling notification events, and learned loads about asynchron" +
                    "ous programming and mobile-app paradigms. I ceased maintenance of the ap" +
                    "p due to similarity in native iOS and Android functionality announced in" +
                    " 2018."
            }
        ],
    },
    computed: {
        current: {
            get: function() {
                return this.sections[this.current_section];
            }
        },
        display_left_nav: function() {
            return this.sections[this.current_section].left != null;
        },
        display_right_nav: function() {
            return this.sections[this.current_section].right != null;
        },
        section_right: function() {
            return this.sections[this.sections[this.current_section].right];
        },
        section_left: function() {
            return this.sections[this.sections[this.current_section].left];
        }
    },
    methods: {
        on_section(section_name) {
            return section_name === this.current_section;
        },
        switch_left() {
            if (this.current.left) {
                this.current_section = this.current.left;
            }
        },
        switch_right() {
            if (this.current.right) {
                this.current_section = this.current.right;
            }
        }
    }
});
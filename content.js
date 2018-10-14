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
        }
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
var testLayout = [
    {"x":0,"y":0,"w":2,"h":2,"i":"0", title: "Title 0", static: false},
    {"x":2,"y":0,"w":2,"h":4,"i":"1", title: "Title 1", static: true},
    {"x":4,"y":0,"w":2,"h":5,"i":"2", title: "Title 2", static: false},
    {"x":6,"y":0,"w":2,"h":3,"i":"3", title: "Title 3", static: false},
    {"x":8,"y":0,"w":2,"h":3,"i":"4", title: "Title 4", static: false},
    {"x":10,"y":0,"w":2,"h":3,"i":"5", title: "Title 5", static: false},
    {"x":0,"y":5,"w":2,"h":5,"i":"6", title: "Title 6", static: false},
    {"x":2,"y":5,"w":2,"h":5,"i":"7", title: "Title 7", static: false},
    {"x":4,"y":5,"w":2,"h":5,"i":"8", title: "Title 8", static: false},
    {"x":6,"y":3,"w":2,"h":4,"i":"9", title: "Title 9", static: true},
    {"x":8,"y":4,"w":2,"h":4,"i":"10", title: "Title 10", static: false},
    {"x":10,"y":4,"w":2,"h":4,"i":"11", title: "Title 11", static: false},
    {"x":0,"y":10,"w":2,"h":5,"i":"12", title: "Title 12", static: false},
    {"x":2,"y":10,"w":2,"h":5,"i":"13", title: "Title 13", static: false},
    {"x":4,"y":8,"w":2,"h":4,"i":"14", title: "Title 14", static: false},
    {"x":6,"y":8,"w":2,"h":4,"i":"15", title: "Title 15", static: false},
    {"x":8,"y":10,"w":2,"h":5,"i":"16", title: "Title 16", static: false},
    {"x":10,"y":4,"w":2,"h":2,"i":"17", title: "Title 17", static: false},
    {"x":0,"y":9,"w":2,"h":3,"i":"18", title: "Title 18", static: false},
    {"x":2,"y":6,"w":2,"h":2,"i":"19", title: "Title 19", static: false}
];

// var GridLayout = VueGridLayout.GridLayout;
// var GridItem = VueGridLayout.GridItem;
Vue.prototype.$eventHub = new Vue()
new Vue({
    el: '#app',
    // components: {
    //     "GridLayout": GridLayout,
    //     "GridItem": GridItem
    // },
    data: {
        layout: testLayout,
        draggable: true,
        resizable: true,
        index: 0
        //initCols: 16
    },
    mounted: function () {
        let self = this
        //this.index = this.layout.length;
        this.$eventHub.$on("event-widget-kill-request", function(data) {
          if (confirm('Are you sure you want to remove?') !== true) {
            return false
          }
            self.$eventHub.$emit('event-widget-remove', data)
        })
        this.$eventHub.$on("event-widget-remove", function(data) {
          console.log("removing", data)
          self.layout.splice(data, 1) // this works because we use grid item index as its ID
        })
        //window.addEventListener('resize', function () {
        //    console.log(window.innerWidth)
        //    self.layoutCols()
            //onLoadedImg(document.getElementById("container"), function() {
            //    setCardWidth()
            //    waterfall('.grid')
            //})
        //})
    },
    beforeDestroy: function() {
        console.log('Destroying', this.i)
    },
    methods: {
        itemTitle(item) {
            var result = item.i;
            if (item.static) {
                result += " - Static";
            }
            return result;
        },
/*        layoutCols() {
            var cols = Math.floor(window.innerWidth/70)
            console.log(cols)
            this.initCols = cols
        },*/
/*
        increaseWidth: function(item) {
            var width = document.getElementById("content").offsetWidth;
            width += 20;
            document.getElementById("content").style.width = width+"px";
        },
        decreaseWidth: function(item) {

            var width = document.getElementById("content").offsetWidth;
            width -= 20;
            document.getElementById("content").style.width = width+"px";
        },
        removeItem: function(item) {
            //console.log("### REMOVE " + item.i);
            this.layout.splice(this.layout.indexOf(item), 1);
        },
        addItem: function() {
            var self = this;
            //console.log("### LENGTH: " + this.layout.length);
            var item = {"x":0,"y":0,"w":2,"h":2,"i":this.index+"", whatever: "bbb"};
            this.index++;
            this.layout.push(item);
        }
*/
    }
});

/*
function generateLayout() {
    return _.map(_.range(0, 25), function (item, i) {
        var y = Math.ceil(Math.random() * 4) + 1;
        return {
            x: _.random(0, 5) * 2 % 12,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05
        };
    });
}*/




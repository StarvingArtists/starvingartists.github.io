// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();


Vue.directive('focus', {
        inserted: function (el) {
          el.focus()
        }
    });
var itemList = 
    [
        { value: "0", field: "Search and Select" },
        { value: "1", field: "Teacher" },
        { value: "2", field: "Technician" },
        { value: "3", field: "Physician" },
        { value: "4", field: "Engineering Technologist" },
        { value: "5", field: "Mechanic" },
        { value: "6", field: "Tradesman" },
        { value: "7", field: "Electrician" },
        { value: "8", field: "Machinist" },
        { value: "9", field: "Radiographer" },
        { value: "10", field: "Programmer" },
        { value: "11", field: "Actuary" },
        { value: "12", field: "Plumber" },
        { value: "13", field: "Surveyor" },
        { value: "14", field: "Welder" },
        { value: "15", field: "Consultant" },
        { value: "16", field: "Auto Mechanic" },
        { value: "17", field: "Tailor" },
        { value: "18", field: "Journalist" },
        { value: "19", field: "Broker" },
        { value: "20", field: "Lawyer" },
        { value: "21", field: "Judge" },
        { value: "22", field: "Barrister" },
        { value: "23", field: "Solicitor" },
        { value: "24", field: "Paramedic" },
        { value: "25", field: "Dental Technician" },
        { value: "26", field: "Quantity Surveyor" },
        { value: "27", field: "Tailor" },
        { value: "28", field: "Nurse" },
        { value: "30", field: "Pharmacist" },
        { value: "31", field: "Hairdresser" },
        { value: "32", field: "Anesthesiology" },
        { value: "33", field: "Engineer" },
        { value: "34", field: "Actuary" },
        { value: "35", field: "Electrician" },
        { value: "36", field: "Machinist" },
        { value: "37", field: "Tradesman" },
        { value: "38", field: "Drafter" },
        { value: "39", field: "Chef" },
        { value: "40", field: "Bricklayer" }
    ];

//map dd_visible to items
 var newItemList = itemList.map(function(el){
                    var item = Object.assign({}, el);
                    item.dd_visible = true;
                    return item
                });         
new Vue({
  el: '#inputSearch',
  data: function()
        {
            var model = 
            {
                items: newItemList,
                open: false,
                searchTerm: '',
                selectedItem: []
            };

            return model;
    },
  
        watch: {
            searchTerm: function(newTerm) {
                var loweredTerm = newTerm.toLowerCase(); 
                this.items.forEach(function(item) {
                if(item.field.toLowerCase().indexOf(loweredTerm) != -1){
                   item.dd_visible = true;
                }else{
                    item.dd_visible = false;
                }                
            }); 
            }
        },

  
        methods:
        {
            toggleDropdown: function()
            {
                this.open = !this.open;
                this.searchTerm = '';
            },
            displayItem: function(){
                var val = this.selectedItem;
                if(val.length === 0){
                    return 'Search and Select'
                }else{
                    return this.selectedItem.field;
                }              
                              
            },
            itemClicked: function(index){
                this.open = false;
                this.selectedItem = this.items[index];
                this.displayItem();
          }  
        }
})

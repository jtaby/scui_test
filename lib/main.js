spade.require('sproutcore-ui'); 

SCUI = SC.Application.create();

SCUI.Workspace = SC.View.extend({
  name: "Majd"
});

SCUI.navController = UI.NavigationController.create({

});

SCUI.CollectionController = SC.CollectionView.extend({
  content: [
    {title: 'One'},
    {title: 'Two'},
    {title: 'Three'},
    {title: 'Four'},
    {title: 'Five'},
    {title: 'Six'},
    {title: 'Seven'},
    {title: 'Two'},
    {title: 'Three'},
    {title: 'Four'},
    {title: 'Five'},
    {title: 'Six'},
    {title: 'Seven'},
    {title: 'Two'},
    {title: 'Three'},
    {title: 'Four'},
    {title: 'Five'},
    {title: 'Six'},
    {title: 'Seven'},
    {title: 'Two'},
    {title: 'Three'},
    {title: 'Four'},
    {title: 'Five'},
    {title: 'Six'},
    {title: 'Seven'},
    {title: 'Two'},
    {title: 'Three'},
    {title: 'Four'},
    {title: 'Five'},
    {title: 'Six'},
    {title: 'Seven'},
    {title: 'Two'},
    {title: 'Three'},
    {title: 'Four'},
    {title: 'Five'},
    {title: 'Six'},
    {title: 'Seven'},
    {title: 'Two'},
    {title: 'Three'},
    {title: 'Four'},
    {title: 'Five'},
    {title: 'Six'},
    {title: 'Seven'},
    {title: 'Two'},
    {title: 'Three'},
    {title: 'Four'},
    {title: 'Five'},
    {title: 'Six'},
    {title: 'Seven'},
    {title: 'Eight'}
  ]
});

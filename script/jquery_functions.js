//*************************************************************
// This module contains supporting JavaScript functions for the
// CE ASP.NET Menu Control.
//
//Change History
//  Date                                    Who                      Change Description                                                     Defect/Change Number
//  25/02/2009       UGSI      AS RECEIVED                         NA
//  25/02/2009      UGSI        Added check for Address Group       TR-4108014
//                              from the  hidden field.
// 02/03/2009       UGSI        Check the presence of value in      TR-4108015
//                              fields before appending in
//                              validateBWFields
//*******************************************************************************

/*===========================================================================
// Unisys Global Industries Finance
// Mortgage Quotations and Sales System
//
// Copyright (c) 2011, Unisys Corporation. All Rights Reserved.
//
// Warning: This computer program is protected by copyright law and international treaties.
// Unauthorised reproduction or distribution of this program, or any portion of it, may result
// in severe civil and criminal penalties, and will be prosecuted to the maximum extent
// possible under law.
//===========================================================================
// Filename: jquery.functions.js
//---------------------------------------------------------------------------
// Developer         : Jojest Thomson
// Application Name  : U-LEAF
// Date Created      : 05/10/2011
// Purpose           : This page contains all jquery functions
//                                   
//===========================================================================
// M A I N T E N A N C E   H I S T O R Y
//---------------------------------------------------------------------------
//    DATE       CM#     WHO                      DESCRIPTION
// ----------  --------  -----------------------  ---------------------------
//
//===========================================================================*/


//============================================================================
// EXPAND COLLAPSE MESSAGE BOXES - Error, Warning, Success, Validation and Info
//============================================================================

//============================================================================
// 				D R O P D O W N   N A V I G A T I O N
//============================================================================

$(document).ready(function() {
	//On Hover Over
function megaHoverOver(){
    $(this).find(".sub").stop().fadeTo('fast', 1).show(); //Find sub and fade it in
    (function($) {
        //Function to calculate total width of all ul's
        jQuery.fn.calcSubWidth = function() {
            rowWidth = 0;
            //Calculate row
            $(this).find("ul").each(function() { //for each ul...
                rowWidth += $(this).width(); //Add each ul's width together
            });
        };
    })(jQuery); 

    if ( $(this).find(".row").length > 0 ) { //If row exists...

        var biggestRow = 0;	

        $(this).find(".row").each(function() {	//for each row...
            $(this).calcSubWidth(); //Call function to calculate width of all ul's
            //Find biggest row
            if(rowWidth > biggestRow) {
                biggestRow = rowWidth;
            }
        });

        $(this).find(".sub").css({'width' :biggestRow}); //Set width
        $(this).find(".row:last").css({'margin':'0'});  //Kill last row's margin

    } else { //If row does not exist...

        $(this).calcSubWidth();  //Call function to calculate width of all ul's
        $(this).find(".sub").css({'width' : rowWidth}); //Set Width

    }
}
//On Hover Out
function megaHoverOut(){
  $(this).find(".sub").stop().fadeTo('fast', 0, function() { //Fade to 0 opactiy
      $(this).hide();  //after fading, hide it
  });
}

//Set custom configurations
var config = {
     sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
     interval: 1, // number = milliseconds for onMouseOver polling interval
     over: megaHoverOver, // function = onMouseOver callback (REQUIRED)
     timeout: 1, // number = milliseconds delay before onMouseOut
     out: megaHoverOut // function = onMouseOut callback (REQUIRED)
};

$("ul#top-nav li .sub").css({'opacity':'0'}); //Fade sub nav to 0 opacity on default
$("ul#top-nav li").hoverIntent(config); //Trigger Hover intent with custom configurations
});



// W A R N I N G S

$(document).ready(function() {
  // Hide the "view" div.
  $('div.view_warning').hide();
  // Watch for clicks on the "warning" link.
  $('div.warning').click(function() {
  // When clicked, toggle the "view" div.
  $('div.view_warning').slideToggle(100);
  return false;
});

// E R R O R

$('div.view_error').hide();
  // Watch for clicks on the "warning" link.
  $('div.error').click(function() {
  // When clicked, toggle the "view" div.
  $('div.view_error').slideToggle(400);
  return false;
});

// I N F O

$('div.view_info').hide();
  // Watch for clicks on the "warning" link.
  $('div.info').click(function() {
  // When clicked, toggle the "view" div.
  $('div.view_info').slideToggle(400);
  return false;
});

// S U C C E S S

$('div.view_success').hide();
  // Watch for clicks on the "warning" link.
  $('div.success').click(function() {
  // When clicked, toggle the "view" div.
  $('div.view_success').slideToggle(400);
  return false;

});

// V A L I D A T I O N

$('div.view_validation').hide();
  // Watch for clicks on the "warning" link.
  $('div.validation').click(function() {
  // When clicked, toggle the "view" div.
  $('div.view_validation').slideToggle(400);
  return false;
});
});


$(function() {
	
$("#jquery-tab").organicTabs({
"speed": 200
});	
	
$("#jquery-tabs").organicTabs({
"speed": 200
});

$("#jquery-tabs-one").organicTabs({
"speed": 200
});

$("#jquery-tabs-two").organicTabs({
"speed": 200
});

$("#jquery-tabs-three").organicTabs({
"speed": 200
});

$("#jquery-tabs-four").organicTabs({
"speed": 200
});

$("#jquery-tabs-five").organicTabs({
"speed": 200
});

$("#jquery-tabs-six").organicTabs({
"speed": 200
});
$("#jquery-tabs-seven").organicTabs({
"speed": 200
});

$("#jquery-tabs-eight").organicTabs({
"speed": 200
});

$("#jquery-tabs-nine").organicTabs({
"speed": 200
});

$("#jquery-tabs-ten").organicTabs({
"speed": 200
});

$("#jquery-tabs-eleven").organicTabs({
"speed": 200
});

$("#jquery-tabs-twelve").organicTabs({
"speed": 200
});

$("#jquery-tabs-thirteen").organicTabs({
"speed": 200
});

$("#jquery-tabs-fourteen").organicTabs({
"speed": 200
});

$("#jquery-tabs-fifteen").organicTabs({
"speed": 200
});

$("#jquery-tabs-sixteen").organicTabs({
"speed": 200
});

$("#jquery-tabs-seventeen").organicTabs({
"speed": 200
});

$("#jquery-tabs-eighteen").organicTabs({
"speed": 200
});

$("#jquery-tabs-nineteen").organicTabs({
"speed": 200
});

$("#jquery-tabs-twenty").organicTabs({
"speed": 200
});

$("#jquery-tabs-twentyone").organicTabs({
"speed": 200
});

$("#jquery-tabs-twentytwo").organicTabs({
"speed": 200
});

$("#jquery-tabs-twentythree").organicTabs({
"speed": 200
});

$("#jquery-tabs-twentyfour").organicTabs({
"speed": 200
});

$("#jquery-tabs-twentyfive").organicTabs({
"speed": 200
});

$("#jquery-tabs-twentysix").organicTabs({
"speed": 200
});

$("#jquery-tabs-twentyseven").organicTabs({
"speed": 200
});

$("#jquery-tabs-twentyeight").organicTabs({
"speed": 200
});

$("#jquery-tabs-twentynine").organicTabs({
"speed": 200
});

$("#jquery-tabs-thirty").organicTabs({
"speed": 200
});

$("#jquery-tabs-thirtyone").organicTabs({
"speed": 200
});

$("#jquery-tabs-thirtytwo").organicTabs({
"speed": 200
});

$("#jquery-tabs-thirtythree").organicTabs({
"speed": 200
});

$("#jquery-tabs-fourty").organicTabs({
"speed": 200
});

//alternative borders

$("dt:even").addClass('background');
$("dd:even").addClass('background');
$("tr:even").addClass("even");
$("tr:odd").addClass("odd");


// popup window
$("a[rel='example']").colorbox();

});

//Print functionality

function printit()
{  
window.print();  
}


$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();	
		} else {
			$('#toTop').fadeOut();
		}
	});
 
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});	
});

$(document).ready(function () {

if ($('.button_rgt_container').length > 1){
	alert('test');

  $('.data_sections').css({width:"100%"})

}

})

/* This program is free software: you can redistribute it and/or
   modify it under the terms of the GNU Lesser General Public License
   as published by the Free Software Foundation, either version 3 of
   the License, or (at your option) any later version.
   
   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
   
   You should have received a copy of the GNU General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>. 
*/

otp.namespace("otp.locale");

/**
  * @class
  */
otp.locale.English = {

    config :
    {
        //Name of a language written in a language itself (Used in Frontend to
        //choose a language)
        name: 'English',
        //FALSE-imperial units are used
        //TRUE-Metric units are used
        metric : false, 
        //Name of localization file (*.po file) in src/client/i18n
        locale_short : "en",
        //Name of datepicker localization in
        //src/client/js/lib/jquery-ui/i18n (usually
        //same as locale_short)
        //this is index in $.datepicker.regional array
        //If file for your language doesn't exist download it from here
        //https://github.com/jquery/jquery-ui/tree/1-9-stable/ui/i18n
        //into src/client/js/lib/jquery-ui/i18n
        //and add it in index.html after other localizations
        //It will be used automatically when UI is switched to this locale
        datepicker_locale_short: "" //Doesn't use localization

    },

    /**
     * Info Widgets: a list of the non-module-specific "information widgets"
     * that can be accessed from the top bar of the client display. Expressed as
     * an array of objects, where each object has the following fields:
     * - content: <string> the HTML content of the widget
     * - [title]: <string> the title of the widget
     * - [cssClass]: <string> the name of a CSS class to apply to the widget.
     * If not specified, the default styling is used.
     */
    infoWidgets : [
            {
	          title:"Try ROUTE",
              content:'<p>to try ROUTE you need to upload a JSON file representing the unavailable <i>Mobility Resources</i>. Please, follow the instructions described <a href="http://139.177.202.145/wp-content/upload.html" target="_blank">HERE</a></p>'
			},
			{
                title: 'About ROUTE',
                content: '<p>Multimodal journey planners are used worldwide to support travelers in planning and executing their journeys. Generated travel plans usually involve local mobility service providers, consider some travelers&#39; preferences, and provide travelers information about the routes&#39; current status and expected delays. However, those planners cannot fully consider the special situations of individual cities when providing travel planning services. Specifically, authorities of different cities might define customizable regulations or constraints of movements in the cities (e.g., due to construction works or pandemics). Moreover, with the transformation of traditional cities into smart cities, travel planners could leverage advanced monitoring features. Finally, most planners do not consider relevant information impacting travel plans, for instance, information that might be provided by travelers (e.g., a crowded square) or by mobility service providers (e.g., changing the timetable of a bus). To address the aforementioned shortcomings, we propose <b>ROUTE</b>, a f<b>R</b>amework f<b>O</b>r c<b>U</b>s<b>T</b>omizable plan<b>E</b>rs that better serve the needs of travelers, local authorities, and mobility service providers in the dynamic ecosystem of smart cities, as compared to travel planning applications available in the marketplace.</p>',
            },
            {
                title: 'Contact Us',
                content: '<p>This study has been designed, developed, and reported by the following investigators:<ul><li>Fahed Alkhabbas, Internet of Things and People Research Center, Malmo University, Sweden - fahed.alkhabbas@mau.se</li><li>Martina De Sanctis, Gran Sasso Science Institute, L&#39;Aquila, Italy - martina.desanctis@gssi.it</li><li>Antonio Bucchiarone, Fondazione Bruno Kessler (FBK), Trento, Italy - bucchiarone@fbk.eu</li><li>Antonio Cicchetti, IDT Department, Malardalen University, Vasteras, Sweden - antonio.cicchetti@mdh.se</li><li>Romina Spalazzese, Internet of Things and People Research Center, Malmo University, Sweden - romina.spalazzese@mau.se</li><li>Paul Davidsson, Internet of Things and People Research Center, Malmo University, Sweden - paul.davidsson@mau.se </li><li>Ludovico Iovino, Gran Sasso Science Institute, L&#39;Aquila, Italy - ludovico.iovino@gssi.it </li></ul></p>'
            },
    ],


    time:
    {
        format         : "MMM Do YYYY, h:mma", //moment.js
        date_format    : "MM/DD/YYYY", //momentjs must be same as date_picker format which is by default: mm/dd/yy
        time_format    : "h:mma", //momentjs
        time_format_picker : "hh:mmtt", //http://trentrichardson.com/examples/timepicker/#tp-formatting
    },

    CLASS_NAME : "otp.locale.English"
};
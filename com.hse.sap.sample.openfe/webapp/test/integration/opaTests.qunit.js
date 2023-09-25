sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/hse/sap/sample/openfe/test/integration/FirstJourney',
		'com/hse/sap/sample/openfe/test/integration/pages/BooksList',
		'com/hse/sap/sample/openfe/test/integration/pages/BooksObjectPage',
		'com/hse/sap/sample/openfe/test/integration/pages/Books_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, Books_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/hse/sap/sample/openfe') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheBooks_textsObjectPage: Books_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);
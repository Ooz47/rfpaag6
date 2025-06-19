(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.webformcustom = {
    attach: function (context, settings) {
      // console.log("hello");
      // On exécute le script uniquement sur le formulaire incidents
      var inputStatutDemandeur = '.webform-submission-incidents-greta-cfa-de-la-guadel-form select[id="edit-statut-demandeur-select"]';

      $(once('inputStatutDemandeur', inputStatutDemandeur, context)).each(function () {
        // Retire l'option "autre" du select
        $('select[id="edit-statut-demandeur-select"] option[value="_other_"]').remove();

        // Si le statut du demandeur change
        $(this).change(function () {
          var value = $(this).val();
          // On modifie la valeur du champ input hidden
          if (value === 'Formateur' ||
            value === 'Apprenant' ||
            value === 'Personnels de l\'établissement d\'accueil de formation') {
            $('input[name="nature_dysfonctionnement"]').val('prob_incident_pers_form');
          }
          if (value === 'Agent GRETA') {
            $('input[name="nature_dysfonctionnement"]').val('prob_incidents_pers_non_form');
          }
        });
      });
    }
  };

})(jQuery, Drupal, this, this.document);

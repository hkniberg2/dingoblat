const languages = ['en', 'sv']

Template.languageSelect.helpers({
  languages() {
    return languages
  },
  
  currentLanguage() {
    return TAPi18n.getLanguage()
  },

  buttonClass() {
    if (TAPi18n.getLanguage() == this) {
      return "btn-success"
    } else {
      return "btn-default"
    }
  }
})

Template.languageSelect.events({
  "click .languageButton"(evt) {
    const button = event.target
    const language = $(button).data("language")
    TAPi18n.setLanguage(language)
  }
})
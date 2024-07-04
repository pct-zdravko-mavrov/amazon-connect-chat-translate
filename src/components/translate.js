import { Predictions } from "@aws-amplify/predictions";

async function ProcessChatText(
  content,
  sourceLang,
  tagretLang,
  formality = "FORMAL"
) {
  const formalitySupportedLanguages = [
    "nl",
    "fr",
    "fr-CA",
    "de",
    "hi",
    "it",
    "ja",
    "ko",
    "pt-PT",
    "es",
    "es-MX",
  ];

  let translateOptions = {
    source: {
      text: content,
      language: sourceLang,
    },
    targetLanguage: tagretLang,
  };

  // Check if the target language supports formality customization
  if (formalitySupportedLanguages.includes(targetLanguage)) {
    translateOptions.formality = formality;
  }

  // let transcriptMessage = await Predictions.convert({
  //     translateText: {
  //         source: {
  //             text: content,
  //             language: sourceLang, // defaults configured on aws-exports.js
  //             // supported languages https://docs.aws.amazon.com/translate/latest/dg/how-it-works.html#how-it-works-language-codes
  //         },
  //         targetLanguage: tagretLang
  //     }
  // });

  let transcriptMessage = await Predictions.convert({
    translateText: translateOptions,
  });

  return transcriptMessage.text;
}
export default ProcessChatText;

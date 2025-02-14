import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  "en-US": {
    translation: {
      BALLOON_RISK: "Balloon Risk",
      GAME_OVER: "Game Over",
      OK: "Ok",
      PUMP_UP_BALLOON: "PUMP UP BALLOON",
      TOTAL_POINTS: "Total Points",
      CURRENT_POINTS: "Current Points",
      COLLECT_POINTS: "COLLECT POINTS",
      BALLOON_BURSTED: "Balloon Burst",
    },
  },"de-DE": {
    translation: {
      BALLOON_RISK: "Risiko-Ballon",
      GAME_OVER: "Spiel ist vorbei",
      OK: "Ok",
      PUMP_UP_BALLOON: "LUFTBALLON AUFPUMPEN",
      TOTAL_POINTS: "Gesamtpunkte",
      CURRENT_POINTS: "Aktuelle Punkte",
      COLLECT_POINTS: "PUNKTE SAMMELN",
      BALLOON_BURSTED: "Ballon geplatzt",
    },
  }, "da-DK": {
    translation: {
      BALLOON_RISK: "Ballonrisiko",
      GAME_OVER: "Spillet er slut",
      OK: "Ok",
      PUMP_UP_BALLOON: "PUMPE BALLON OP",
      TOTAL_POINTS: "PUMPE BALLON OP",
      CURRENT_POINTS: "Aktuelle punkter",
      COLLECT_POINTS: "SAMLE PUNKTER",
      BALLOON_BURSTED: "Ballon spr\u00e6ngt",
    },
  }, "fr-FR": {
    translation: {
      BALLOON_RISK: "Ballon \u00e0 risque",
      GAME_OVER: "Game Over",
      OK: "Acceptable",
      PUMP_UP_BALLOON: "PUMP UP BALLOON",
      TOTAL_POINTS: "Total des points",
      CURRENT_POINTS: "Points actuels",
      COLLECT_POINTS: "COLLECTEZ DES POINTS\u2009!",
      BALLOON_BURSTED: "Le ballon a \u00e9clat\u00e9 ",
    },
  }, "ko-KR": {
    translation: {
      BALLOON_RISK: "\ud48d\uc120 \uc704\ud5d8 (Balloon Risk)",
      GAME_OVER: "\uac8c\uc784 \uc885\ub8cc",
      OK: "\uad1c\ucc2e\uc74c",
      PUMP_UP_BALLOON: "\ud48d\uc120\uc744 \ud38c\ud504\ud558\uc138\uc694",
      TOTAL_POINTS: "\ucd1d \uc810\uc218",
      CURRENT_POINTS: "\ud604\uc7ac \uc810\uc218",
      COLLECT_POINTS: "\uc810\uc218\ub97c \ubaa8\uc73c\uc138\uc694",
      BALLOON_BURSTED: "\ud48d\uc120 \ud130\uc9d0",
    },
  }, "it-IT": {
    translation: {
      BALLOON_RISK: "Palloncino (BART test)",
      GAME_OVER: "Fine partita",
      OK: "Ok",
      PUMP_UP_BALLOON: "GONFIA IL PALLONCINO",
      TOTAL_POINTS: "Punteggio totale",
      CURRENT_POINTS: "Punteggio attuale",
      COLLECT_POINTS: "COLLEZIONA PUNTI",
      BALLOON_BURSTED: "Palloncino Scoppiato",
    },
  }, "zh-CN": {
    translation: {
      BALLOON_RISK: "气球风险",
      GAME_OVER:  "游戏结束",
      OK: "\u5dee",
      PUMP_UP_BALLOON: "给气球充气",
      TOTAL_POINTS: "总积分",
      CURRENT_POINTS: "当前积分",
      COLLECT_POINTS: "收集积",
      BALLOON_BURSTED: "气球爆炸",
    },
  },
  "zh-HK": {
    translation: {
      BALLOON_RISK: "氣球風險",
      GAME_OVER: "遊戲結束",
      OK: "\u5dee",
      PUMP_UP_BALLOON: "給氣球充氣",
      TOTAL_POINTS: "總積分",
      CURRENT_POINTS: "當前積分",
      COLLECT_POINTS: "收集積",
      BALLOON_BURSTED: "氣球爆炸",
    },
  },
  "es-ES": {
    translation: {
      BALLOON_RISK: "Riesgo de globo",
      GAME_OVER: "Juego Terminado",
      OK: "Okay",
      PUMP_UP_BALLOON: "Inflar globo",
      TOTAL_POINTS: "Puntos Totales",
      CURRENT_POINTS: "Puntos actuales",
      COLLECT_POINTS: "Acumular puntos",
      BALLOON_BURSTED: "explosión de globo",
    },
  },
  "hi-IN": {
    translation: {
      BALLOON_RISK: "गुब्बारा जोखिम",
      GAME_OVER: "खेल खत्म",
      OK: "ठीक है",
      PUMP_UP_BALLOON: "गुब्बारे में हवा भरो",
      TOTAL_POINTS: "कुल_अंक",
      CURRENT_POINTS: "वर्तमान_अंक",
      COLLECT_POINTS: "इकट्ठा_अंक",
      BALLOON_BURSTED: "गुब्बारा_फट गए",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    keySeparator: false,
    resources,
  });

export default i18n;

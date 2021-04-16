function getPolarity(scoreTag) {
    let polarity = ""
    switch(scoreTag) {
        case "P+":
            polarity = "STRONG POSTIVE"
            break;
        case "P":
            polarity = "POSTIVE"
            break;
        case "NEU":
            polarity = "NEUTRAL"
            break;
        case "N":
            polarity = "NEGATIVE"
            break;
        case "N+":
            polarity = "STRONG NEGATIVE"
            break;
        default:
            polarity = scoreTag
            break;
    }
    return polarity;
}

export { getPolarity }

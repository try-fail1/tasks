import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    // Birthday (Jul 27), Christmas, Easter, Fourth of July, Halloween
    type EmojiHoliday = "🐰" | "🎄" | "🎃" | "🎆" | "🎁";

    const YEAR_SEQ: Record<EmojiHoliday, EmojiHoliday> = {
        "🐰": "🎆",
        "🎆": "🎁",
        "🎁": "🎃",
        "🎃": "🎄",
        "🎄": "🐰"
    };

    const ALPH_SEQ: Record<EmojiHoliday, EmojiHoliday> = {
        "🎁": "🎄",
        "🎄": "🐰",
        "🐰": "🎆",
        "🎆": "🎃",
        "🎃": "🎁"
    };

    const [emoji, setEmoji] = useState<EmojiHoliday>("🎁");

    function changeYear(): void {
        setEmoji(YEAR_SEQ[emoji]);
    }

    function changeAlph(): void {
        setEmoji(ALPH_SEQ[emoji]);
    }

    return (
        <div>
            <Button onClick={changeAlph}>Alphabet</Button>
            <Button onClick={changeYear}>Year</Button>
            {<div>Holiday: {emoji}</div>}
        </div>
    );
}

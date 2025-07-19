const chapters = {
  1: {
    title: "The White Wolf Sleeps",
    content: "<p>Seren and Jack's final moments together; the slow farewell.</p>",
    image: "https://i.imgur.com/kjQNXSG.jpg",
    music: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_5a58c9f3d8.mp3"
  },
  2: {
    title: "The Warmth Fades",
    content: "<p>Mourning. Seren withdraws. The stars remain indifferent.</p>",
    image: "https://i.imgur.com/SA6MnC5.jpg",
    music: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_70e57033f1.mp3"
  },
  3: {
    title: "The Event Horizon",
    content: "<p>The black hole encounter; Seren is nearly lost.</p>",
    image: "https://i.imgur.com/OMFMcay.jpg",
    music: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_16d6f13c39.mp3"
  },
  4: {
    title: "The Day the Sun Almost Fell",
    content: "<p>Sarah and Aedric intervene. Seren is saved, but broken.</p>",
    image: "https://i.imgur.com/rms8MPf.jpg",
    music: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_5a58c9f3d8.mp3"
  },
  5: {
    title: "A Crown of Ash and Gold",
    content: "<p>Debate. Blame. Healing. A fragile reunion forms.</p>",
    image: "https://i.imgur.com/g47uiiT.jpg",
    music: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_70e57033f1.mp3"
  },
  6: {
    title: "The Fractured Truce",
    content: "<p>Aedric and Seren's confrontation; the wound between them deepens.</p>",
    image: "https://i.imgur.com/2sg0ESU.jpg",
    music: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_16d6f13c39.mp3"
  },
  7: {
    title: "Whispers of the White Wolf",
    content: "<p>Seren hears Jack again. A nudge from memory steers his path.</p>",
    image: "https://i.imgur.com/ssXa2WF.jpg",
    music: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_5a58c9f3d8.mp3"
  },
  8: {
    title: "The Newborn Sun",
    content: "<p>Seren chooses to rise again. Transforms anew.</p>",
    image: "https://i.imgur.com/SA6MnC5.jpg",
    music: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_70e57033f1.mp3"
  },
  9: {
    title: "The Creator and the Created",
    content: "<p>Final confrontation: Seren vs Aedric. Power meets purpose.</p>",
    image: "https://i.imgur.com/OMFMcay.jpg",
    music: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_16d6f13c39.mp3"
  },
  10: {
    title: "Kindling the Dawn",
    content: "<p>The cosmos begins anew. Duty accepted, with a heart reshaped.</p>",
    image: "https://i.imgur.com/rms8MPf.jpg",
    music: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_5a58c9f3d8.mp3"
  },
  11: {
    title: "The Sun That Remembered",
    content: "<p>Seren, luminous and strong, carries all he's loved forward.</p>",
    image: "https://i.imgur.com/g47uiiT.jpg",
    music: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_70e57033f1.mp3"
  }
};

function createChapterButtons() {
  const container = document.getElementById('chapter-select');
  for (const [id, chapter] of Object.entries(chapters)) {
    const btn = document.createElement('button');
    btn.textContent = id + '. ' + chapter.title;
    btn.onclick = () => loadChapter(id);
    container.appendChild(btn);
  }
}

function loadChapter(id) {
  const chapter = chapters[id];
  if (!chapter) return;
  let html = `<h2>${chapter.title}</h2>${chapter.content}`;
  if (chapter.image) {
    html += `<img src="${chapter.image}" alt="${chapter.title}" />`;
  }
  if (chapter.music) {
    html += `<audio controls><source src="${chapter.music}" type="audio/mpeg" /></audio>`;
  }
  document.getElementById('chapter-content').innerHTML = html;
}

window.onload = createChapterButtons;

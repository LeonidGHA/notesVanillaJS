export default class userNotesClass {
  constructor(userNotes) {
    this.allNotes = userNotes;
  }

  archiveNotesCount() {
    return this.allNotes.reduce((acc, note) => {
      if (note.archive) {
        acc += 1;
      }
      return acc;
    }, 0);
  }

  activeNotesCount() {
    return this.allNotes.reduce((acc, note) => {
      if (!note.archive) {
        acc += 1;
      }
      return acc;
    }, 0);
  }

  summaryNotes() {
    return this.allNotes.reduce((acc, note) => {
      const indexSummaryNote = acc.findIndex(
        (el) => el.category === note.category
      );

      if (indexSummaryNote === -1) {
        if (note.archive) {
          acc.push({ category: note.category, active: 0, archive: 1 });
          return acc;
        }
        acc.push({ category: note.category, active: 1, archive: 0 });
        return acc;
      }

      if (note.archive) {
        acc[indexSummaryNote].archive += 1;
        return acc;
      }
      acc[indexSummaryNote].active += 1;
      return acc;
    }, []);
  }

  addNewNote(name, content, category) {
    const newNotes = {
      id: 12,
      name: name,
      created: new Date().toLocaleDateString(),
      category: category,
      content: content,
      dates: "",
      archive: false,
    };

    this.allNotes = [...this.allNotes, newNotes];
  }
}

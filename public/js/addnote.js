async function newNote(event) {
    event.preventDefault();

    notes_title = document.querySelector('#newNoteTitle').value.trim();
    notes_content = document.querySelector('@newNotesContent').value.trim();

    if (notes_title && notes_content) {
        const response = await fetch(`/api/notes`, {
            method: 'POST',
            body: JSON.stringify({
                notes_title,
                notes_content,               
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to add note.');
          }
    }
}

document.querySelector('#addNewNote').addEventListener('submit', enrollSession);
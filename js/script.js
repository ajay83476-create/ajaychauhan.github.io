function searchMaterial() {

    const input =
        document.getElementById("searchInput").value
        .trim()
        .toLowerCase();

    const result =
        document.getElementById("searchResult");

    if (input === "") {

        result.innerHTML =
            "<p>Please enter a subject or topic.</p>";

        return;
    }

    result.innerHTML =
        "<p>Search system is being prepared. " +
        "Your subject-wise and topic-wise resources " +
        "will appear here.</p>";
}

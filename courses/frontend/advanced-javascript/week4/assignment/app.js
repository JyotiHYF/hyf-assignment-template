const form = document.querySelector(".url-form");
const urlInput = document.querySelector(".url-input");
const status = document.querySelector(".status");

const dialog = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
const image = document.querySelector(".result-image");
const saveButton = document.querySelector(".save-button");

const cardsContainer = document.querySelector(".cards-container");
const cardsTitle = document.querySelector(".cards-title");

const CRUD_URL =
  "https://crudcrud.com/api/bb37be0c1e5048df93bffb4f7e75816b/screenshots";

let currentScreenshotUrl = null;

function toggleTitle() {
  cardsTitle.style.display =
    cardsContainer.children.length > 0 ? "block" : "none";
}

function setStatus(msg = "") {
  status.textContent = msg;
}

function normalizeUrl(url) {
  return url.startsWith("http") ? url : `https://${url}`;
}

//load//
async function loadScreenshots() {
  try {
    const res = await fetch(CRUD_URL);

    if (!res.ok) {
      throw new Error(`Load failed: ${res.status}`);
    }

    const data = await res.json();

    cardsContainer.innerHTML = "";

    data.forEach(createCard);

    toggleTitle();
  } catch (err) {
    console.error("LOAD ERROR:", err);
  }
}

//card//

function createCard(item) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = item.imageUrl;
  img.alt = "Saved screenshot";
  img.className = "card-image";

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.className = "delete-button";

  btn.addEventListener("click", async () => {
    try {
      const res = await fetch(`${CRUD_URL}/${item._id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(`Delete failed: ${res.status}`);
      }

      card.remove();
      toggleTitle();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  });

  card.append(img, btn);
  cardsContainer.prepend(card);
}

//generate//

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let url = normalizeUrl(urlInput.value.trim());

  if (!url) {
    setStatus("Please enter a URL");
    return;
  }

  setStatus("Loading...");

  try {
    const res = await fetch(
      `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodeURIComponent(
        url,
      )}&width=1920&height=1080`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": CONFIG.RAPID_API_KEY,
          "x-rapidapi-host": "website-screenshot6.p.rapidapi.com",
        },
      },
    );

    if (!res.ok) {
      throw new Error(`Screenshot API failed: ${res.status}`);
    }

    const data = await res.json();

    const screenshotUrl = data.screenshotUrl || data.image;

    if (!screenshotUrl) {
      throw new Error("No screenshot URL returned");
    }

    currentScreenshotUrl = screenshotUrl;

    image.src = screenshotUrl;
    dialog.showModal();

    setStatus("");
    urlInput.value = "";
  } catch (err) {
    console.error("SCREENSHOT ERROR:", err);
    setStatus("Error generating screenshot");
  }
});
//save//

saveButton.addEventListener("click", async () => {
  if (!currentScreenshotUrl) return;

  try {
    saveButton.disabled = true;

    const res = await fetch(CRUD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imageUrl: currentScreenshotUrl,
      }),
    });

    if (!res.ok) {
      throw new Error(`Save failed: ${res.status}`);
    }

    const data = await res.json();

    createCard(data);

    dialog.close();
    toggleTitle();
  } catch (err) {
    console.error("SAVE ERROR:", err);
  } finally {
    saveButton.disabled = false;
  }
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

loadScreenshots();

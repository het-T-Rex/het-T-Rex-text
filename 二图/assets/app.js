const FAVORITES_KEY = 'shbooks:favorites';

function getFavorites() {
	try {
		const raw = localStorage.getItem(FAVORITES_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function setFavorites(ids) {
	try {
		localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
	} catch { }
}
function isFavorited(id) {
	return getFavorites().includes(id);
}
function toggleFavorite(id) {
	const favs = getFavorites();
	const next = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
	setFavorites(next);
}

function updateFavoriteButton(btn, active) {
	btn.textContent = active ? '已收藏 ❤' : '收藏 ♡';
	btn.classList.toggle('active', !!active);
}

function createBookCard(book, skipLink) {
	const div = document.createElement('div');
	div.className = 'card book-card';
	div.innerHTML = `
		<a class="book-cover" ${skipLink ? '' : `href="book.html?id=${encodeURIComponent(book.id)}"`}>
			<img alt="${escapeHtml(book.title)}" src="${book.cover}">
		</a>
		<div class="book-body">
			<a class="book-title link" ${skipLink ? '' : `href="book.html?id=${encodeURIComponent(book.id)}"`}>
				${escapeHtml(book.title)}
			</a>
			<p class="book-author">${escapeHtml(book.author)}</p>
			<div class="row">
				<span class="price">¥${book.price.toFixed(0)}</span>
				<span class="pill">${book.condition}</span>
			</div>
			<div class="row"><span class="muted">${escapeHtml(book.campus)}</span>
				<button class="btn fav-btn" data-id="${book.id}">${isFavorited(book.id) ? '已收藏 ❤' : '收藏 ♡'}</button>
			</div>
		</div>
	`;
	return div;
}

function wireFavoriteButtons(onChange) {
	const buttons = document.querySelectorAll('.fav-btn');
	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			const id = btn.getAttribute('data-id');
			toggleFavorite(id);
			updateFavoriteButton(btn, isFavorited(id));
			if (typeof onChange === 'function') onChange();
		});
	});
}

function escapeHtml(s) {
	return String(s)
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');
}// JavaScript source code

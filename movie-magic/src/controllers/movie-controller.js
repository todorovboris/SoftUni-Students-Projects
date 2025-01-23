import { Router } from 'express';
import movieHandler from '../handlers/movie-handler.js';

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', async (req, res) => {
    const newMovie = req.body; // create object with the data from THE FORM of the POST REQUEST
    await movieHandler.createMovie(newMovie);

    res.redirect('/');
});

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId; // take the query parameters
    const movie = await movieHandler.getOneMovie(movieId);

    res.render('details', { movie });
});

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieHandler.getAllMovies(filter);

    res.render('search', { movies, filter });
});

export default movieController;

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function GameLibraryCard({ game }: { game: any }) {
  return (
    <Card
      sx={{
        width: 280,
        // borderRadius: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover .overlay': { opacity: 1 },
        '&:hover .card-media': { transform: 'scale(1.06)' },
      }}
    >
      {/* Image + overlay wrapper */}
      <Box sx={{ position: 'relative', height: 300, overflow: 'hidden' }}>

        {/* The image */}
        <CardMedia
          component="img"
          image={game.cover_image}
          alt={game.title}
          className="card-media"
          sx={{
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
          }}
        />

        {/* Hover overlay */}
        <Box
          className="overlay"
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(6, 18, 19, 0.80)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            p: 2.5,
            opacity: 0,
            transition: 'opacity 0.35s ease',
          }}
        >
          <Typography variant="h6" sx={{ color: '#fff', mb: 1 }}>
            {game.title}
          </Typography>
          <Typography
            variant="overline"
            sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1, mb: 0.75 }}
          >
            {game.release_date}
          </Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)' }}>
            {game.summary}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
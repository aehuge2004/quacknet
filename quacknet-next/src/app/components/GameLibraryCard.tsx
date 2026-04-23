import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Game } from '@/types/games';




export default function GameLibraryCard({ game }: { game: Game }) {
  return (
    <Card sx={{ width: '345px', height: '400px' }}>
      <CardHeader>
        <Typography variant="h5" component="div">
          {game.title}
        </Typography>
      </CardHeader>
      <CardMedia
        component="img"
        height="194"
        image={game.cover_image}
        alt={game.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {game.summary}
        </Typography>
      </CardContent>
    </Card>
  );
}

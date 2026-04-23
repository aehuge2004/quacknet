import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




export default function GameLibraryCard({ game }: { game: Game }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader>
        <Typography variant="h5" component="div">
          {game.name}
        </Typography>
      </CardHeader>
      <CardMedia
        component="img"
        height="194"
        image={game.image}
        alt={game.name}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {game.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

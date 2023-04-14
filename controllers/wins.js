import Win from "../models/teamWin.js";

export const getWins = async (req, res) => {
  try {
    const wins = await Win.find();
    res.json (wins);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getWin = async (req, res) => {
  try {
    const { id } = req.params;

    const win = await Win.findById(id);
    res.json (win);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  
}};

export const createWin = async (req, res) => {
  try {
    const win = new Win(req.body);
    await win.save();
    res.status(201).json (win);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateWin = async (req, res) => {
  const { id } = req.params;
  const win = await Win.findByIdAndUpdate(id, req.body);
  res.status(200).json (win);
};

export const deleteWin = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Win.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Win Deleted!");
    }

    throw new Error( "Win not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
